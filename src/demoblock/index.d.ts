declare module '*.vue' {
    const component: import("vue").DefineComponent<{}, {}, any>
    export default component
}

declare module 'web-vue3' {
    const demoblock: (md: any) => void;
    export default demoblock
}