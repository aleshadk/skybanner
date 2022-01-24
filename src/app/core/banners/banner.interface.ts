export interface IAdglareResponse {
    response: {
        success: 1 | number,
        campaigns: IAdglareHTMLCreative[] | IAdglareImgCreative[];
    }    
}


export interface IAdglareAbstractCreativeData {
    click_url: string;
    impl_url: string;
    landing_url: string;
}

export interface IAdglareHTMLCreativeData extends IAdglareAbstractCreativeData {
    code: string;
}

export interface IAdglareImgCreativeData extends IAdglareAbstractCreativeData {
    image_url: string;
    target_window: string;
}

export interface IAdglareVideoCreativeData extends IAdglareAbstractCreativeData {
    url: string;
    mimetype: string;
}


export interface IAdglareAbstractCreative<TCreativeData extends IAdglareAbstractCreativeData> {
    crID: string;
    width: number;
    height: number;
    creative_type: 'thirdparty' | 'image' | 'video';
    creative_data: TCreativeData;
    custom_fields?: {[key: string]: string};
}

export interface IAdglareHTMLCreative extends IAdglareAbstractCreative<IAdglareHTMLCreativeData> {
    creative_type: 'thirdparty'
}

export interface IAdglareImgCreative extends IAdglareAbstractCreative<IAdglareImgCreativeData> {
    creative_type: 'image'
}

export interface IAdglareVideoCreative extends IAdglareAbstractCreative<IAdglareVideoCreativeData> {
    creative_type: 'video'
}

export type AdglareCreative = IAdglareHTMLCreative | IAdglareImgCreative | IAdglareVideoCreative;