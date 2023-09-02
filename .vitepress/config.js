import {defineConfig} from 'vitepress';
import mathjax3 from "markdown-it-mathjax3";
// https://vitepress.dev/reference/site-config
const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml',
    'mjx-container',
    'mjx-assistive-mml',
];
export default defineConfig({
    title: "ZH的博客",
    description: "记录日常",
    cleanUrls: true,
    rewrites: { // 路径重写
    },
    markdown: {
        config: (md) => {
            md.use(mathjax3);
        },
        lineNumbers: true
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
    lastUpdated: true,
    head: [
        ['meta', {name: 'theme-color', content: '#3c8772'}],
        // [
        //   'script',
        //   {
        //     src: 'https://cdn.usefathom.com/script.js',
        //     'data-site': 'AZBRSFGG',
        //     'data-spa': 'auto',
        //     defer: ''
        //   }
        // ]
    ],
    base: "/", // 基础url
    themeConfig: {
        outlineTitle: '本页导航',
        lastUpdatedText: "最后修改",
        search: {
            provider: 'local',
            disableDetailedView: false,
            disableQueryPersistence: true
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: "关于", link: "/about/"},
        ],
        sidebar: {
            "/example/": [
                {
                    text: 'Examples',
                    items: [
                        {text: 'Markdown Examples', link: '/example//markdown-examples'},
                        {text: 'Runtime API Examples', link: '/example/api-examples'},
                    ],
                },
            ],
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/zh601095001/blogs'},
        ],
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present ZH',
        },
        editLink: {
            pattern: "https://github.com/zh601095001/blogs/blob/master/:path",
            text: "Edit this page on GitHub"
        }
    },
});
