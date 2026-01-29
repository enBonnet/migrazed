import { describe, it, expect } from "bun:test";

// We need to test the argument parsing logic
// Since parseArgs uses process.exit, we'll test it by spawning the script

describe("CLI Argument Parsing", () => {
  it("should show help when called with --help", async () => {
    const proc = Bun.spawn({
      cmd: ["bun", "run", "src/script.ts", "--help"],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stderr = await new Response(proc.stderr).text();

    expect(exitCode).toBe(0);
    expect(stderr).toContain("Usage:");
    expect(stderr).toContain("dark-theme.json");
    expect(stderr).toContain("-l, --light");
    expect(stderr).toContain("-o, --output");
  });

  it("should show help when called with -h", async () => {
    const proc = Bun.spawn({
      cmd: ["bun", "run", "src/script.ts", "-h"],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stderr = await new Response(proc.stderr).text();

    expect(exitCode).toBe(0);
    expect(stderr).toContain("Usage:");
  });

  it("should show error when no arguments provided", async () => {
    const proc = Bun.spawn({
      cmd: ["bun", "run", "src/script.ts"],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stderr = await new Response(proc.stderr).text();

    expect(exitCode).toBe(1);
    expect(stderr).toContain("Usage:");
  });

  it("should show error when -l flag has no value", async () => {
    const proc = Bun.spawn({
      cmd: ["bun", "run", "src/script.ts", "dark.json", "-l"],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stderr = await new Response(proc.stderr).text();

    expect(exitCode).toBe(1);
    expect(stderr).toContain("-l/--light flag requires a path argument");
  });

  it("should show error when -o flag has no value", async () => {
    const proc = Bun.spawn({
      cmd: ["bun", "run", "src/script.ts", "dark.json", "-o"],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stderr = await new Response(proc.stderr).text();

    expect(exitCode).toBe(1);
    expect(stderr).toContain("-o/--output flag requires a path argument");
  });

  it("should show error for unknown flag", async () => {
    const proc = Bun.spawn({
      cmd: ["bun", "run", "src/script.ts", "dark.json", "--unknown"],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stderr = await new Response(proc.stderr).text();

    expect(exitCode).toBe(1);
    expect(stderr).toContain("Unknown flag");
  });

  it("should successfully convert with dark theme only", async () => {
    const proc = Bun.spawn({
      cmd: ["bun", "run", "src/script.ts", "example/vscode/humans.json"],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stdout = await new Response(proc.stdout).text();

    expect(exitCode).toBe(0);
    expect(stdout).toContain("Loading dark theme");
    expect(stdout).toContain("Successfully converted");
    expect(stdout).toContain("dark variant only");
  });

  it("should successfully merge dark and light themes", async () => {
    const proc = Bun.spawn({
      cmd: [
        "bun",
        "run",
        "src/script.ts",
        "example/vscode/humans.json",
        "-l",
        "example/vscode/humans-light.json",
      ],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stdout = await new Response(proc.stdout).text();

    expect(exitCode).toBe(0);
    expect(stdout).toContain("Loading dark theme");
    expect(stdout).toContain("Loading light theme");
    expect(stdout).toContain("Successfully converted");
    expect(stdout).toContain("dark and light variants");
  });

  it("should use custom output path with -o", async () => {
    const outputPath = "test-output/custom-theme.json";

    const proc = Bun.spawn({
      cmd: [
        "bun",
        "run",
        "src/script.ts",
        "example/vscode/humans.json",
        "-o",
        outputPath,
      ],
      stdout: "pipe",
      stderr: "pipe",
    });

    const exitCode = await proc.exited;
    const stdout = await new Response(proc.stdout).text();

    expect(exitCode).toBe(0);
    expect(stdout).toContain(outputPath);

    // Cleanup
    try {
      await Bun.file(outputPath).delete();
      await Bun.file("test-output").delete();
    } catch {
      // Ignore cleanup errors
    }
  });
});
