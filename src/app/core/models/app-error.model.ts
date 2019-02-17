export class AppError {
    constructor(public errorMsg?: any, public errorCode?: any, public isHttp?: boolean) {}
}
