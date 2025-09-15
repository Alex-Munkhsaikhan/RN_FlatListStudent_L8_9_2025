/*
    This file will define the dataType we are using in our app
    We will also create the array Data here and then export both
    so we can import whenever we need them
*/

 // Declare the data type for each item in the array
  type dataType = {
    id: string, // unique identifier
    title: string // Text displayed in flatlist
  }

  // Make the array
  const DATA: dataType[] = [
    {id: '1', title: 'First Item'},
    {id: '2', title: 'Second Item'},
    {id: '3', title: 'Third Item'},
    {id: '4', title: 'Fourth Item'},
  ];

  // When exporting more than one item, we DON'T use the word default,
  // and instead put them in {}
  export { DATA, dataType };
