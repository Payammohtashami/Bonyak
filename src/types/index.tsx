export interface HeaderNavType {
    title: string,
    route: string,
}

export interface FlyDetailType {
    time: string,
    airline: {
        title: string,
        icon: any,
    },
    flyNumber: string,
    origin: string,
    status: string,
    realTime: string,
    airplane: string
}