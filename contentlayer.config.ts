import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
// import GithubSlugger from 'github-slugger';

const Pages = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    path: { type: 'string', required: true },
    description: { type: 'string', required: false },
    image: { type: 'string', required: false },
    imageWidth: { type: 'number', required: false },
    imageHeight: { type: 'number', required: false },
  },
}));

const DocumentationPages = defineDocumentType(() => ({
  name: 'DocumentationPage',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    path: { type: 'string', required: true },
    description: { type: 'string', required: false },
    inMenu: { type: 'boolean', required: false },
    menuLabel: { type: 'string', required: false },
    menuOrder: { type: 'number', required: false },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Pages, DocumentationPages],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});
