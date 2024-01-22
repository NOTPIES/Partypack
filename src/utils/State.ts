// massive shoutout to not-nullptr for the site state code from our old project
import { createContext } from "react";

export const SiteContext = createContext<IContext>({} as IContext);

export interface UserDetailInterface { ID: string, Username: string, GlobalName: string, Avatar: string }

export interface SiteState {
    UserDetails: UserDetailInterface | null;
    DiscordOauthURL: string | null;
}

export interface IContext {
    state: SiteState;
    setState: (newState: SiteState) => void;
}