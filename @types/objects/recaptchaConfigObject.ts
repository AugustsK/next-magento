export enum ReCaptchaFormEnum {
    BRAINTREE = 'BRAINTREE',
    CONTACT = 'CONTACT',
    CUSTOMER_CREATE = 'CUSTOMER_CREATE',
    CUSTOMER_EDIT = 'CUSTOMER_EDIT',
    CUSTOMER_FORGOT_PASSWORD = 'CUSTOMER_FORGOT_PASSWORD',
    CUSTOMER_LOGIN = 'CUSTOMER_LOGIN',
    NEWSLETTER = 'NEWSLETTER',
    PLACE_ORDER = 'PLACE_ORDER',
    PRODUCT_REVIEW = 'PRODUCT_REVIEW',
    SENDFRIEND = 'SENDFRIEND'
}

export interface RecaptchaConfigObject {
    badge_position: string;
    failure_message: string;
    forms: ReCaptchaFormEnum[];
    language_code: string;
    minimum_score: number;
    website_key: string;
}
