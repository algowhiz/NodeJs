const shortid = require('shortid');
const URL = require('../models/url');

async function handelShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ err: 'URL required' });

    const shortid2 = shortid.generate(); // corrected to 'shortid.generate()'

    try {
        const newURL = new URL({
            shortID: shortid2,
            rediredURL: body.url,
        });

        await newURL.save(); // save the new URL document

        return res.json({ id: shortid2 });
    } catch (err) {
        return res.status(500).json({ err: 'Server error' });
    }
}

module.exports = {
    handelShortURL,
}
