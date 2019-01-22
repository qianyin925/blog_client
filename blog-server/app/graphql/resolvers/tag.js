const mongoose = require('mongoose');
const modelTag = mongoose.model('Tag');

module.exports = {
  Tag: {
    parent: async (parents, args, context, info) => {
      let data = {};
      if (parents._id){
        data = await modelTag.findOne({
          _id: parents.parent
        });
      }
      return data;
    },
  },

  Query: {
    getTag: async (parents, args, context, info) => {
      const list = await modelTag.find();
      return {list};
    },
  },

  Mutation: {
    createTag: async (parents, args, context, info) => {
      const body = args.body;
      await modelTag.insertMany({
        ...body,
        creator: "创建人先写死",
        updater: "更新人先写死(创建时加的)",
      });
      const data = await modelTag.find();
      return data;
    }
  }
};