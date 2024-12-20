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
    $unwind: '$results'
  },
  {
    $group: {
      _id: '$field3',
      total: { $sum: '$results.amount' }
    }
  }
];

const result = await collection.aggregate(pipeline).toArray();
```