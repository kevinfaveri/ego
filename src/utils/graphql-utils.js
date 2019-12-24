export function getSingleMarkdownNode(data) {
  return data.allMarkdownRemark.edges[0].node;
}

export function getSingleImageNode(data) {
  return data.allImageSharp.edges[0].node;
}

export function getSingleImageFluid(data) {
  return data.placeholderImage.childImageSharp.fluid;
}

export function getSingleImageFixed(data) {
  return data.placeholderImage.childImageSharp.fixed;
}

export function getImageByOriginalFileName(imageList, filename) {
  return imageList.allImageSharp.edges.find(
    x => x.node.fluid.originalName === filename
  ).node.fluid.src;
}
