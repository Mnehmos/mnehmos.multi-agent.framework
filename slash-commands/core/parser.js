/**
 * Slash Command Parser for Roo Multi-Agent Framework
 * Handles parsing, validation, and routing of slash commands
 */

class SlashCommandParser {
    constructor() {
        this.commands = new Map();
        this.aliases = new Map();
        this.commandRegistry = new Map();
        
        // Initialize built-in commands
        this.initializeBuiltInCommands();
    }

    /**
     * Initialize built-in command definitions
     */
    initializeBuiltInCommands() {
        const builtInCommands = [
            {
                name: 'plan',
                aliases: ['p', 'project', 'roadmap'],
                description: 'Generate comprehensive project task maps with phases and dependencies',
                category: 'project-management',
                permissions: ['read', 'edit', 'command'],
                sparcAlignment: 'specification',
                implementation: ['workflow-template-prompting', 'boomerang-task-delegation']
            },
            {
                name: 'scope',
                aliases: ['s', 'analyze', 'investigate'],
                description: 'Deep analysis of GitHub issues for comprehensive scope documents',
                category: 'project-management',
                permissions: ['read', 'browser', 'mcp'],
                sparcAlignment: ['specification', 'architecture'],
                implementation: ['issue-decomposition-analysis', 'codebase-impact-mapping', 'hypothetical-scenario-modeling']
            },
            {
                name: 'assign',
                aliases: ['a', 'delegate', 'task'],
                description: 'Delegate tasks to appropriate specialist agents with structured prompts',
                category: 'project-management',
                permissions: ['read', 'edit', 'command', 'mcp'],
                sparcAlignment: 'specification',
                implementation: ['boomerang-task-delegation', 'instructed-prompting', 'template-prompting']
            },
            {
                name: 'status',
                aliases: ['status', 'progress', 'state'],
                description: 'Show current project state and task progress',
                category: 'utility',
                permissions: ['read'],
                sparcAlignment: 'completion',
                implementation: ['state-management', 'traceability-documentation']
            },
            {
                name: 'design',
                aliases: ['d', 'architect', 'system-design'],
                description: 'Generate system architecture documents and design specifications',
                category: 'architecture',
                permissions: ['read', 'edit', 'browser'],
                sparcAlignment: 'architecture',
                implementation: ['visual-documentation-generation', 'tree-of-thoughts', 'step-back-prompting']
            },
            {
                name: 'build',
                aliases: ['b', 'deploy', 'release'],
                description: 'Execute build and deployment workflows with quality gates',
                category: 'development',
                permissions: ['read', 'edit', 'command', 'browser'],
                sparcAlignment: ['pseudocode', 'refinement', 'completion'],
                implementation: ['automated-development-workflows', 'semantic-guardrails']
            },
            {
                name: 'mode',
                aliases: ['m', 'switch', 'agent'],
                description: 'Switch between specialized AI agent modes',
                category: 'framework',
                permissions: ['read', 'edit', 'command'],
                sparcAlignment: 'specification',
                implementation: ['agent-configuration-management']
            }
        ];

        builtInCommands.forEach(cmd => {
            this.registerCommand(cmd);
        });
    }

    /**
     * Register a command definition
     */
    registerCommand(command) {
        this.commands.set(command.name, command);
        
        // Register all aliases
        command.aliases.forEach(alias => {
            this.aliases.set(alias, command.name);
        });
        
        // Store in registry
        this.commandRegistry.set(command.name, command);
    }

    /**
     * Parse and validate a slash command
     */
    parseCommand(input) {
        if (!input.startsWith('/')) {
            return {
                success: false,
                error: 'Commands must start with /',
                suggestion: 'Type /help to see available commands'
            };
        }

        const parts = input.trim().substring(1).split(' ');
        const commandName = parts[0].toLowerCase();
        const args = parts.slice(1);

        const command = this.commands.get(commandName) || this.aliases.get(commandName);
        
        if (!command) {
            return {
                success: false,
                error: `Unknown command: ${commandName}`,
                suggestion: 'Type /help to see available commands'
            };
        }

        // Validate permissions
        const hasPermission = this.validatePermissions(command, args);
        if (!hasPermission) {
            return {
                success: false,
                error: `Insufficient permissions for command: ${commandName}`,
                suggestion: 'Check command permissions and try again'
            };
        }

        return {
            success: true,
            command: command,
            args: args,
            originalInput: input
        };
    }

    /**
     * Validate command permissions based on current mode
     */
    validatePermissions(command, args) {
        // This would integrate with the current mode system
        // For now, return true for all commands
        return true;
    }

    /**
     * Get all available commands
     */
    getAvailableCommands() {
        const commands = [];
        this.commands.forEach((cmd, name) => {
            commands.push({
                name,
                aliases: Array.from(this.aliases.keys()).filter(alias => this.aliases.get(alias) === name),
                description: cmd.description,
                category: cmd.category,
                permissions: cmd.permissions
            });
        });
        
        return commands.sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Get command by name or alias
     */
    getCommand(nameOrAlias) {
        return this.commands.get(nameOrAlias) || this.aliases.get(nameOrAlias);
    }
}

module.exports = SlashCommandParser;