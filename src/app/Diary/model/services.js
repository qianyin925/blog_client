import axios from '@utils/request';

// 获取日记
export const getDiaries = async ({
  spin,
  search,
} = {}) => {
  const res = await axios({
    spin,
    url: GLOBAL_SERVICE.GRAPHQL_URL,
    method: 'post',
    data: {
      variables: { search },
      query: `
        query(
          $search: DiarySearch,
        ){
          diaries(
            search: $search,
          ){
            list {
              id
              name
              bill
              diet
              getUp
              toRest
              fitness
              bodyIndex
              informalEssay
            }
          }
        }`,
    },
  });
  return _.get(res, 'data.data.diaries.list');
};

// 创建日记
export const createDiaries = async ({
  spin,
  body,
} = {}) => {
  const res = await axios({
    spin,
    url: GLOBAL_SERVICE.GRAPHQL_URL,
    method: 'post',
    data: {
      variables: { body },
      query: `
        mutation(
          $body: [DiaryFields!]!,
        ){
          createDiaries(
            body: $body,
          ){
            change {
              id
              name
              bill
              diet
              getUp
              toRest
              fitness
              bodyIndex
              informalEssay
            }
          }
        }`,
    },
  });
  return _.get(res, 'data.data.createDiaries') || {};
};

// 更新日记
export const updateDiaries = async ({
  spin,
  body,
  conds,
} = {}) => {
  const res = await axios({
    spin,
    url: GLOBAL_SERVICE.GRAPHQL_URL,
    method: 'post',
    data: {
      variables: { conds, body },
      query: `
        mutation(
          $body: DiaryFields!,
          $conds: DiarySearch!,
        ){
          updateDiaries(
            body: $body,
            conds: $conds,
          ){
            change {
              id
              name
              bill
              diet
              getUp
              toRest
              fitness
              bodyIndex
              informalEssay
            }
          }
        }`,
    },
  });
  return _.get(res, 'data.data.updateDiaries') || {};
};
