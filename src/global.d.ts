///<reference path="react-markdown"/>

declare module  '*.md'

declare module '!raw-loader!*' {
    const content: string;
    export default content;
}

declare namespace React {
    export let Markdown;
}
