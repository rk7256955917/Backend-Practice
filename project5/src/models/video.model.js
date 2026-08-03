import mongoose,{Schema} from "mongoose";
"mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
 videoFile:{
    type:String, // claudnarry url
    required:true
 },
 thumbnail:{
    type:String,
    required:true
 },
 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 duration:{
    type:Number,
    required:true
 },
 views:{
    type:Number,
    default:true 
 },
 owner:{
    type:Schema.Types.ObjectId,
    ref:"user"
 }
},
    {
        timestamps:true
    }
)
videoSchema.plugin(mongooseAggregatePaginate);
export const video = mongoose.model("video",videoSchema)