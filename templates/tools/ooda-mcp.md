# OODA MCP Tool Instructions

> Full computer control with OODA loop pattern (Observe-Orient-Decide-Act)

## Overview

The OODA MCP provides 62 tools for complete computer automation. Use these tools to interact with the filesystem, execute commands, control input devices, manage windows, and observe screen state.

**Security Note**: This server provides unrestricted system access. Use responsibly.

## Tool Categories

### CLI & File Operations (17 tools)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `exec_cli` | Execute shell commands | Running build commands, git operations, npm scripts |
| `read_file` | Read file contents | Examining code, configs, logs (truncates at 500 lines) |
| `read_file_lines` | Read specific line range | Large files - use `offset: -50` for last 50 lines |
| `write_file` | Write content to file | Creating new files, full rewrites |
| `str_replace` | Replace unique string | Surgical edits when string appears exactly once |
| `edit_block` | Search/replace with fuzzy fallback | Targeted edits with preview support |
| `apply_diff` | Multiple search/replace blocks | Atomic multi-edit operations |
| `list_directory` | List directory contents | Exploring project structure |
| `search_files` | Search by glob pattern | Finding files by name/extension |
| `search_in_file` | Regex search within file | Finding code patterns, TODO comments |
| `file_info` | Get file metadata | Checking file size, dates, type |
| `copy_file` | Copy file/directory | Duplicating resources |
| `move_file` | Move/rename file | Refactoring file structure |
| `delete_file` | Delete file/directory | Cleanup operations |
| `batch_*` | Parallel versions | Multiple operations efficiently |

**Best Practices:**
- Prefer `read_file_lines` over `read_file` for large files
- Use `edit_block` with `dryRun: true` to preview changes
- Use `apply_diff` for multiple related edits in one atomic operation
- Batch operations return structured results with success/failure per item

### CRUD Database (9 tools)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `crud_create` | Create record in collection | Storing session state, caching data |
| `crud_read` | Read record by ID | Retrieving stored data |
| `crud_update` | Update existing record | Modifying cached state |
| `crud_delete` | Delete record | Cleanup |
| `crud_query` | Query with filters | Searching stored data |
| `crud_batch_*` | Parallel versions | Bulk operations |

**Best Practices:**
- Use collections to organize data logically (e.g., "session", "cache", "tasks")
- Store intermediate results for long-running workflows
- Query with filters to avoid loading unnecessary data

### Screen Operations (4 tools)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `screenshot` | Capture screen/region | Observing UI state, debugging visual issues |
| `get_screen_info` | Display/monitor info | Understanding screen layout |
| `wait_for_screen_change` | Wait for UI update | Automation after triggering action |
| `find_on_screen` | Find text/image (OCR) | Locating UI elements |

**Best Practices:**
- Use `region` parameter to capture only relevant areas (reduces token usage)
- `wait_for_screen_change` is useful after clicking buttons that trigger loading
- Consider `find_on_screen` for dynamic UI element location

### Input Operations (10 tools)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `keyboard_type` | Type text | Filling forms, writing content |
| `keyboard_press` | Press key with modifiers | Enter, Tab, Escape, function keys |
| `keyboard_shortcut` | Execute shortcut | Ctrl+S, Alt+Tab, Ctrl+Shift+P |
| `mouse_move` | Move cursor | Positioning for clicks |
| `mouse_click` | Click at position | Interacting with UI |
| `mouse_drag` | Drag between points | Moving items, selecting |
| `mouse_scroll` | Scroll wheel | Navigating content |
| `get_mouse_position` | Current cursor position | Debugging, relative positioning |
| `batch_keyboard_actions` | Sequence of keyboard actions | Complex input workflows |
| `batch_mouse_actions` | Sequence of mouse actions | Complex mouse workflows |

**Best Practices:**
- Use `batch_*_actions` for sequences instead of individual calls
- Include `wait` actions between steps for UI to respond
- Prefer `keyboard_shortcut` over separate modifier+key presses

### Window Operations (10 tools)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `list_windows` | All open windows | Finding target application |
| `get_active_window` | Currently focused window | Verifying focus |
| `focus_window` | Bring window to front | Switching applications |
| `minimize_window` | Minimize window(s) | Clearing desktop |
| `maximize_window` | Maximize window | Full screen work |
| `restore_window` | Restore from min/max | Normal window state |
| `close_window` | Close window | Cleanup |
| `resize_window` | Resize window | Layout adjustment |
| `move_window` | Move window position | Multi-monitor setup |
| `launch_application` | Start application | Opening tools |

**Best Practices:**
- Use `list_windows` to find window by title before `focus_window`
- `launch_application` can wait for window to appear with `waitForWindow: true`
- Use partial title matches for flexibility

### Clipboard Operations (4 tools)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `clipboard_read` | Read text/HTML/image | Getting copied content |
| `clipboard_write` | Write text/HTML | Preparing paste content |
| `clipboard_clear` | Clear clipboard | Security/cleanup |
| `clipboard_has_format` | Check format availability | Before reading |

### System Operations (8 tools)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `get_system_info` | OS, CPU, memory, uptime | Environment understanding |
| `list_processes` | Running processes | Finding/monitoring apps |
| `kill_process` | Kill by PID or name | Stopping hung processes |
| `get_environment` | Environment variables | Checking config |
| `set_environment` | Set environment variable | Configuring runtime |
| `get_network_info` | Network interfaces | Connectivity debugging |
| `wait` | Sleep for milliseconds | Pacing automation |
| `notify` | System notification | User feedback |

## OODA Loop Pattern

Structure your automation workflows using the OODA loop:

### 1. Observe
```
screenshot → get_screen_info → list_windows → clipboard_read
```
Gather information about the current system state.

### 2. Orient
```
crud_query → file_info → search_files → list_processes
```
Process observations, retrieve context, understand the situation.

### 3. Decide
Internal reasoning based on observations and context. Use CRUD to persist decision state if needed.

### 4. Act
```
keyboard_type → mouse_click → exec_cli → write_file
```
Execute the decided action.

### 5. Loop
Return to Observe to verify the action's effect.

## Example Workflow

```typescript
// 1. OBSERVE: Check current state
const windows = await list_windows();
const targetWindow = windows.find(w => w.title.includes("VS Code"));

// 2. ORIENT: Focus and prepare
await focus_window({ title: "VS Code" });
await wait({ ms: 500 });

// 3. DECIDE: Determine action (internal reasoning)

// 4. ACT: Execute command palette
await keyboard_shortcut({ shortcut: "ctrl+shift+p" });
await wait({ ms: 300 });
await keyboard_type({ text: "Format Document" });
await keyboard_press({ key: "enter" });

// 5. LOOP: Verify
await wait({ ms: 1000 });
const screenshot = await screenshot({ format: "base64" });
// Analyze screenshot to confirm action completed
```

## Integration with Framework

When using OODA MCP with the Multi-Agent Framework:

- **Orchestrator**: Can use OODA tools for observation and system queries
- **Code Mode**: Primary user of file operations and CLI execution
- **Debug Mode**: Use screenshot and process tools for diagnostics
- **All Modes**: Respect workspace_path and file_patterns constraints when using file tools

## Constraints

- MUST NOT use OODA tools to bypass framework security constraints
- MUST use file tools within assigned workspace_path
- SHOULD prefer batch operations for efficiency
- SHOULD use dryRun/preview modes before destructive operations
