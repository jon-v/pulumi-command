// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * A local command to be executed.
 * This command can be inserted into the life cycles of other resources using the
 * `dependsOn` or `parent` resource options. A command is considered to have
 * failed when it finished with a non-zero exit code. This will fail the CRUD step
 * of the `Command` resource.
 */
export class Command extends pulumi.CustomResource {
    /**
     * Get an existing Command resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Command {
        return new Command(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'command:local:Command';

    /**
     * Returns true if the given object is an instance of Command.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Command {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Command.__pulumiType;
    }

    /**
     * The command to run on create.
     */
    public readonly create!: pulumi.Output<string | undefined>;
    /**
     * The command to run on delete.
     */
    public readonly delete!: pulumi.Output<string | undefined>;
    /**
     * The directory from which to run the command from. If `dir` does not exist, then
     * `Command` will fail.
     */
    public readonly dir!: pulumi.Output<string | undefined>;
    /**
     * Additional environment variables available to the command's process.
     */
    public readonly environment!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The program and arguments to run the command.
     * For example: `["/bin/sh", "-c"]`
     */
    public readonly interpreter!: pulumi.Output<string[] | undefined>;
    /**
     * The standard error of the command's process
     */
    public /*out*/ readonly stderr!: pulumi.Output<string>;
    /**
     * The standard output of the command's process
     */
    public /*out*/ readonly stdout!: pulumi.Output<string>;
    /**
     * The command to run on update.
     */
    public readonly update!: pulumi.Output<string | undefined>;

    /**
     * Create a Command resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CommandArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["create"] = args ? args.create : undefined;
            resourceInputs["delete"] = args ? args.delete : undefined;
            resourceInputs["dir"] = args ? args.dir : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["interpreter"] = args ? args.interpreter : undefined;
            resourceInputs["update"] = args ? args.update : undefined;
            resourceInputs["stderr"] = undefined /*out*/;
            resourceInputs["stdout"] = undefined /*out*/;
        } else {
            resourceInputs["create"] = undefined /*out*/;
            resourceInputs["delete"] = undefined /*out*/;
            resourceInputs["dir"] = undefined /*out*/;
            resourceInputs["environment"] = undefined /*out*/;
            resourceInputs["interpreter"] = undefined /*out*/;
            resourceInputs["stderr"] = undefined /*out*/;
            resourceInputs["stdout"] = undefined /*out*/;
            resourceInputs["update"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Command.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Command resource.
 */
export interface CommandArgs {
    /**
     * The command to run on create.
     */
    create?: pulumi.Input<string>;
    /**
     * The command to run on delete.
     */
    delete?: pulumi.Input<string>;
    /**
     * The working directory in which to run the command from.
     */
    dir?: pulumi.Input<string>;
    /**
     * Additional environment variables available to the command's process.
     */
    environment?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The program and arguments to run the command.
     * On Linux and macOS, defaults to: `["/bin/sh", "-c"]`. On Windows, defaults to: `["cmd", "/C"]`
     */
    interpreter?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The command to run on update.
     */
    update?: pulumi.Input<string>;
}
