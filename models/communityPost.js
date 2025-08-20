import mongoose from "mongoose";

const communityPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Community",
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CommunityPost =
  mongoose.models?.CommunityPost ||
  mongoose.model("CommunityPost", communityPostSchema);

export default CommunityPost;
