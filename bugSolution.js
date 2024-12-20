```javascript
const pipeline = [
  {
    $match: { /* some filter */ }
  },
  {
    $lookup: {
      from: 'collection2',
      localField: 'field1',
      foreignField: 'field2',
      as: 'results'
    }
  },
  {
    $unwind: { 
        path: '$results', 
        preserveNullAndEmptyArrays: true
    }
  },
  {
    $group: {
      _id: '$field3',
      total: { $sum: { $ifNull: [ '$results.amount', 0 ] } }
    }
  }
];

const result = await collection.aggregate(pipeline).toArray();
```