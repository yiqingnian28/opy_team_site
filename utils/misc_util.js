const findContentById = (contentId, contentList) => {
  if (!contentId || !contentList || !contentList.length) {
    return null;
  }

  for (let index in contentList) {
    if (contentList[index].contentId === contentId) {
      return contentList[index];
    }
  }
  return null;
};

const findContentListByContentType = (contentType, contentList) => {
  const resultList = [];
  if (!contentType || !contentList || !contentList.length) {
    return resultList;
  }

  for (let index in contentList) {
    if (contentType === contentList[index].contentType) {
      resultList.push(contentList[index]);
    }
  }
  return resultList;
}

module.exports = {
  findContentById: findContentById,
  findContentListByContentType: findContentListByContentType
}