/**
 * Command Registry for Roo Multi-Agent Framework
 * Manages dynamic command loading and registration
 */

class CommandRegistry {
    constructor() {
        this.commands = new Map();
        this.commandFiles = new Map();
        this.loadedModules = new Set();
    }

    /**
     * Register a command from file
     */
    async registerFromFile(filePath, commandName) {
        try {
            const fs = require('fs').promises;
            const content = await fs.readFile(filePath, 'utf8');
            
            // Parse frontmatter and content
            const command = this.parseCommandFile(content, commandName);
            
            if (command.success) {
                this.commands.set(commandName, command);
                this.commandFiles.set(commandName, filePath);
                
                console.log(`Registered command: ${commandName} from ${filePath}`);
                return { success: true, command };
            } else {
                return { success: false, error: command.error };
            }
        } catch (error) {
            console.error(`Failed to register command from ${filePath}:`, error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Parse command file with frontmatter support
     */
    parseCommandFile(content, expectedName) {
        const lines = content.split('\n');
        const frontmatter = {};
        let commandContent = [];
        let inFrontmatter = true;
        
        for (const line of lines) {
            if (line.trim() === '---') {
                inFrontmatter = true;
                continue;
            }
            
            if (!inFrontmatter && line.includes(':')) {
                const [key, ...value] = line.split(':').map(s => s.trim());
                if (value) {
                    frontmatter[key.toLowerCase()] = value.trim();
                }
                continue;
            }
            
            if (!inFrontmatter && line.trim() !== '') {
                commandContent.push(line);
            }
        }
        
        const name = frontmatter.name || expectedName;
        if (!name) {
            return { success: false, error: 'No command name found in frontmatter' };
        }
        
        const description = frontmatter.description || '';
        const aliases = this.parseAliases(frontmatter.aliases);
        const category = frontmatter.category || 'utility';
        const permissions = this.parsePermissions(frontmatter.permissions);
        const sparcAlignment = this.parseSparcAlignment(frontmatter['sparc-alignment']);
        const implementation = this.parseImplementation(frontmatter.implementation);
        
        return {
            success: true,
            command: {
                name,
                description,
                aliases,
                category,
                permissions,
                sparcAlignment,
                implementation,
                content: commandContent.join('\n').trim()
            }
        };
    }

    /**
     * Parse aliases from frontmatter
     */
    parseAliases(aliasesString) {
        if (!aliasesString) return [];
        
        try {
            return JSON.parse(aliasesString);
        } catch {
            return aliasesString.split(',').map(a => a.trim()).filter(a => a);
        }
    }

    /**
     * Parse permissions from frontmatter
     */
    parsePermissions(permissionsString) {
        if (!permissionsString) return [];
        
        try {
            return JSON.parse(permissionsString);
        } catch {
            return permissionsString.split(',').map(p => p.trim());
        }
    }

    /**
     * Parse SPARC alignment from frontmatter
     */
    parseSparcAlignment(alignmentString) {
        if (!alignmentString) return [];
        
        try {
            return JSON.parse(alignmentString);
        } catch {
            return alignmentString.split(',').map(a => a.trim());
        }
    }

    /**
     * Parse implementation techniques from frontmatter
     */
    parseImplementation(implementationString) {
        if (!implementationString) return [];
        
        try {
            return JSON.parse(implementationString);
        } catch {
            return implementationString.split(',').map(i => i.trim());
        }
    }

    /**
     * Get all registered commands
     */
    getAllCommands() {
        const commands = [];
        this.commands.forEach((cmd, name) => {
            commands.push({
                name,
                aliases: Array.from(this.getAliasesForCommand(name)),
                description: cmd.description,
                category: cmd.category,
                permissions: cmd.permissions,
                sparcAlignment: cmd.sparcAlignment,
                implementation: cmd.implementation
            });
        });
        
        return commands.sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Get aliases for a command
     */
    getAliasesForCommand(commandName) {
        const aliases = [];
        this.aliases.forEach((alias, command) => {
            if (command === command) {
                aliases.push(alias);
            }
        });
        return aliases;
    }

    /**
     * Get command by name or alias
     */
    getCommand(nameOrAlias) {
        return this.commands.get(nameOrAlias);
    }

    /**
     * Load commands from directory
     */
    async loadFromDirectory(directoryPath) {
        try {
            const fs = require('fs').promises;
            const files = await fs.readdir(directoryPath);
            
            for (const file of files) {
                if (file.endsWith('.md')) {
                    const filePath = `${directoryPath}/${file}`;
                    const commandName = file.replace('.md', '');
                    
                    await this.registerFromFile(filePath, commandName);
                }
            }
            
            return { success: true, loaded: files.length };
        } catch (error) {
            console.error(`Failed to load commands from ${directoryPath}:`, error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get command file path
     */
    getCommandFilePath(commandName) {
        return this.commandFiles.get(commandName);
    }
}

module.exports = CommandRegistry;