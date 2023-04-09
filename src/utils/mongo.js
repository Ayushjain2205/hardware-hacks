import { MongoClient } from "mongodb";

// Replace the connection string with your MongoDB Atlas connection string
const uri =process.env.REACT_APP_MONGO_ATLAS_URI;

// Create a new MongoClient instance
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB Atlas cluster
client.connect((err) => {
  if (err) {
    console.error("Failed to connect to MongoDB Atlas:", err);
    return;
  }
  console.log("Connected to MongoDB Atlas successfully!");

    const collection = client.db('tapyo').collection('automations');
    
     try {
    const automations = await collection.find({}).toArray();
    console.log('Fetched automations successfully:', automations);
  } catch (err) {
    console.error('Failed to fetch automations:', err);
  }

  // Create a new document with the fields "id", "source", "destination", and "timestamp"
  const automationDocument = {
    id: id,
    source: source,
    destination: destination,
    timestamp: new Date()
  };

  // Insert the document into the collection
  try {
    const result = await collection.insertOne(automationDocument);
    console.log('Document inserted successfully:', result.ops[0]);
  } catch (err) {
    console.error('Failed to insert document:', err);
  }
});

// Don't forget to close the MongoDB connection when you're done
client.close();
