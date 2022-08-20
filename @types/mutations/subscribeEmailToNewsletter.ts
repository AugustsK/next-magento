export enum SUBSCRIBE_STATUS {
    NOT_ACTIVE = 'NOT_ACTIVE',
    SUBSCRIBED = 'SUBSCRIBED',
    UNSUBSCRIBED = 'UNSUBSCRIBED',
    UNCONFIRMED = 'UNCONFIRMED'
}

export interface SubscribeEmailToNewsletter {
    subscribeEmailToNewsletter: {
        status: SUBSCRIBE_STATUS;
    };
}
