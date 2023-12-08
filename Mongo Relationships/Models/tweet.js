const mongoose = require('mongoose');
const { Schema } = mongoose;

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/relationshipDemo'

// setup mongoose connection
mongoose.connect(winURI)
    .then((data) => {
        console.log('---connection open---\n')
        // console.log(data)
    })
    .catch(err => {
        console.log('---connection failed---\n')
        console.log(err)
    });

// Schema Implementation
const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

//Model implementation
const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     /// create User
//     // const user = new User({ username: 'chickenfan99', age: 30 });
//     // const tweet = new Tweet({ text: 'Omg, I love my chicken family!', likes: 0 });
//     // tweet.user = user;
//     // user.save();
//     // tweet.save();

//     /// find User
//     const user = await User.findOne({ username: 'chickenfan99' })
//     const tweet = new Tweet({ text: 'Bok Bok Bok, my chickens are noisy!', likes: 1234 });
//     tweet.user = user;
//     tweet.save();
// }

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    console.log(t);
}

findTweet();