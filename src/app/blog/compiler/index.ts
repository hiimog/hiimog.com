export type Language = 
    "cpp"   |
    "cs"    |
    "go"    |
    "groovy"|
    "java"  |
    "js"    |
    "json"  |
    "json5" |
    "jsx"   |
    "lua"   |
    "py"    |
    "rust"  |
    "ts"    |
    "tsx"   |
    "vim"
    ;

interface Renderable {

}

export class Text {
    constructor(
        private content: string | string[],
        private style: string | null = null,
    ){}
}

export class Code {
    constructor(
        private lang: Language,
        private content: string | string[],
        private inline = true,
    ){}
}

export class Link {
    constructor(
        private content: string,
        private href: string
    ) {}
}

export type ParagraphItem = Text | Code | string;
export type Paragraph = ParagraphItem[];

export class Post {
    constructor(
        private title: string,
        private tags: string[],
        private summary: string,
        private content: Paragraph[]
    ){}
}
