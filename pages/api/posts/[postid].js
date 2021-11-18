import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';



const handler = nextConnect();
handler.use(middleware);


handler.get(async (req, res) => {

    const { postid } = req.query

    let doc = await req.db.collection('posts').findOne({cid: postid - 0},{})
    res.json(doc);

});

export default handler;