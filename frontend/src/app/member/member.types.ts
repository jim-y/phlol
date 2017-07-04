/**
 * Created by kling on 7/3/17.
 */

export enum LOLServer {
    EUW, EUNE, NA, KR
}

export type Member = {
    phName: string;
    phRef: string;
    ign: string;
    igRef: string;
    server: LOLServer;
}
