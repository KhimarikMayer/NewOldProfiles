import { Webpack } from 'betterdiscord';

export const AccessibilityStore = betterdiscord.Webpack.getStore("AccessibilityStore");
export const AuthenticationStore = betterdiscord.Webpack.getStore("AuthenticationStore");
export const RelationshipStore = betterdiscord.Webpack.getStore("RelationshipStore");
export const ActivityStore = betterdiscord.Webpack.getStore("PresenceStore");
export const UserStore = betterdiscord.Webpack.getStore("UserStore");
export const ChannelStore = betterdiscord.Webpack.getStore("ChannelStore");
export const NewGameStore = betterdiscord.Webpack.getStore("NewGameStore");
export const PermissionStore = betterdiscord.Webpack.getStore("PermissionStore");
export const GuildStore = betterdiscord.Webpack.getStore("GuildStore");
export const StreamStore = betterdiscord.Webpack.getStore("ApplicationStreamingStore");
export const UserProfileStore = betterdiscord.Webpack.getStore("UserProfileStore");
export const ApplicationStore = betterdiscord.Webpack.getStore("ApplicationStore");
export const ApplicationStreamPreviewStore = betterdiscord.Webpack.getStore("ApplicationStreamPreviewStore");
export const VoiceStateStore = betterdiscord.Webpack.getStore("VoiceStateStore");
export const GuildMemberStore = betterdiscord.Webpack.getStore("GuildMemberStore");
export const GuildRoleStore = betterdiscord.Webpack.getStore("GuildRoleStore");
export const StreamerModeStore = betterdiscord.Webpack.getStore("StreamerModeStore");
export const { useStateFromStores } = betterdiscord.Webpack.getMangled((m) => m.Store, {
          useStateFromStores: betterdiscord.Webpack.Filters.byStrings("useStateFromStores")
        }, { raw: true });
