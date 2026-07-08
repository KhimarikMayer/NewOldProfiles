import React from 'react';
import { Webpack } from 'betterdiscord';
import { PopUtils, MessageButtons } from '@modules/common';
import { intl } from '../modules.js';
import { ButtonClasses } from '../modules.js';

let MessageButtonLarge;
let MessageButtonSmall;
let MoreOverflowButton;
let SendFriendRequestButton;
let EditProfileButton;
let BotAddButton;
let MarkdownFormat;
let NoteRenderer;
let ConnectionRenderer;
let Board;
let RolePermissionCheck;
let TagRenderer;
let MutualFriends;
let MutualServers;

function getIntlString(hash, parameter) {
    if (parameter) return intl.intl.formatToPlainString(intl.t[`${hash}`], parameter);
    return intl.intl.formatToPlainString(intl.t[`${hash}`]);
}

export function MessageButtonLargeComponent({ autoFocus, onClose, userId }) {
    MessageButtonLarge ??= Webpack.getByStrings(
        "let{userId", 
        ",{variant", 
        '"primary",', 
        { searchExports: true }
    );
    
    return React.createElement(MessageButtonLarge, { 
        autoFocus, 
        onClose: () => PopUtils.popAll(), 
        userId, 
        text: getIntlString("YzpScd") 
    });
}

export function MessageButtonSmallComponent({ onClose, userId, variant }) {
    MessageButtonSmall ??= Webpack.getByStrings(
        "userId", 
        "tooltipText:", 
        ",variant", 
        "{text", 
        { searchExports: true }
    );
    
    return React.createElement(MessageButtonSmall, { 
        onClose: () => PopUtils.popAll(), 
        userId, 
        variant 
    });
}

export function MoreOverflowButtonComponent({ user }) {
    MoreOverflowButton ??= Webpack.getMangled("user-profile-overflow-menu", {
        Button: Webpack.Filters.byStrings("popoutTargetRef")
    });
    
    return React.createElement(MoreOverflowButton.Button, { user });
}

export function SendFriendRequestButtonComponent({ autoFocus, userId, variant }) {
    SendFriendRequestButton ??= Webpack.getMangled("SEND_FRIEND_REQUEST,icon", {
        SendFriendRequest: Webpack.Filters.combine(
            Webpack.Filters.byStrings("{userId:"), 
            Webpack.Filters.not(Webpack.Filters.byStrings("tooltipText"))
        )
    });
    
    return React.createElement(SendFriendRequestButton.SendFriendRequest, { 
        autoFocus, 
        userId, 
        variant, 
        text: getIntlString("gc9aSx") 
    });
}

export function PendingRequestButton() {
    return React.createElement(
        "button",
        {
            className: `${ButtonClasses.button} ${ButtonClasses.sm} ${ButtonClasses.secondary} ${ButtonClasses.hasText}`,
            type: "button",
            disabled: true,
            style: { opacity: 0.6, cursor: "default" }
        },
        React.createElement("div", { className: `${ButtonClasses.buttonChildrenWrapper}` },
            React.createElement("div", { 
                className: `${ButtonClasses.buttonChildren}`, 
                style: { fontSize: "14px", fontWeight: "500" } 
            },
                getIntlString("xMH6vD") // "Pending Request"
            )
        )
    );
}

export function EditProfileButtonComponent({ user }) {
    EditProfileButton ??= Webpack.getByStrings(
        "trackUserProfileAction", 
        "EDIT_PROFILE", 
        { searchExports: true }
    );
    
    return React.createElement(EditProfileButton, { user });
}

export function BotAddButtonComponent({ user }) {
    BotAddButton ??= Webpack.getByStrings('"user-bot-profile-add-app"');
    
    return React.createElement(BotAddButton, { 
        user, 
        text: getIntlString("E64YCz") 
    });
}

export function MarkdownComponent({ userBio }) {
    MarkdownFormat ??= Webpack.getByStrings("userBio", "disableAnimations");
    
    return React.createElement(MarkdownFormat, { 
        className: "userBio", 
        userBio 
    });
}

export function NoteComponent({ userId }) {
    NoteRenderer ??= Webpack.getByStrings(
        "hidePersonalInformation", 
        "onUpdate", 
        "placeholder"
    );
    
    return React.createElement(NoteRenderer, { 
        className: "note", 
        userId 
    });
}

export function ConnectionComponent({ connectedAccount, userId }) {
    ConnectionRenderer ??= Webpack.getByStrings(
        "connectedAccount", 
        "connectedAccountOpenIcon", 
        "CONNECTED_ACCOUNT_VIEWED", 
        { searchExports: true }
    );
    
    return React.createElement(ConnectionRenderer, { 
        className: "connectedAccount", 
        connectedAccount, 
        userId, 
        showMetadata: false 
    });
}

export function BoardEditRenderer({ user }) {
    Board ??= Webpack.getByStrings(
        "data-scroller", 
        "fade:!0,", 
        { searchExports: true }
    );
    
    return React.createElement(Board, { user });
}

export function RolePermissionHook({ guildId }) {
    RolePermissionCheck ??= Webpack.getByStrings(
        ".ADMINISTRATOR", 
        ".MANAGE_MESSAGES"
    );
    
    return RolePermissionCheck({ guildId });
}

export function WidgetTagRenderer({ tags, widgetType, className }) {
    TagRenderer ??= Webpack.getBySource('"EXPAND_GAME_TAGS"', { 
        declarationFilter: (x) => String(x).includes('"EXPAND_GAME_TAGS"') 
    });
    
    return React.createElement(TagRenderer, { tags, widgetType, className });
}

export function MutualFriendRenderer({ user, status, guildId, onSelect }) {
    MutualFriends ??= Webpack.getByStrings("MODAL_V2", "discriminatorClass");
    
    return React.createElement(MutualFriends, { 
        user, 
        status, 
        guildId, 
        onSelect 
    });
}

export function MutualServerRenderer({ key, user, guild, nick, onSelect }) {
    MutualServers ??= Webpack.getByStrings("hasAvatarForGuild", "nick");
    return React.createElement(MutualServers, { 
        key, 
        user, 
        guild, 
        nick, 
        onSelect 
    });
}

export const Components = {
    MessageButtonLarge: MessageButtonLargeComponent,
    MessageButtonSmall: MessageButtonSmallComponent,
    MoreOverflowButton: MoreOverflowButtonComponent,
    SendFriendRequestButton: SendFriendRequestButtonComponent,
    PendingRequestButton: PendingRequestButton,
    EditProfileButton: EditProfileButtonComponent,
    BotAddButton: BotAddButtonComponent,
    Markdown: MarkdownComponent,
    Note: NoteComponent,
    Connection: ConnectionComponent,
    BoardEdit: BoardEditRenderer,
    RolePermission: RolePermissionHook,
    WidgetTag: WidgetTagRenderer,
    MutualFriend: MutualFriendRenderer,
    MutualServer: MutualServerRenderer,
};

export default Components;
