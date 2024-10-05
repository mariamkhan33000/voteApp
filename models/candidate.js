const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema ({
    name: {
        this: String,
        required: true, 
    }, 
    party: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    votea: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            voteAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    voteCount:{
        type: Number,
        default: 0
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;