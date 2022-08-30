  // // Updating Function/Updating state correctly
  // useEffect(() => {
  //   console.log("rendered!");
  //   const interval = setInterval(() => {
  //     setCount((prevState) => prevState + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // UseEffect cleanup functions
  // useEffect(() => {
  //   console.log("effect runs!");
  //   //return clean up
  //   return () => {
  //     console.log('Cleaning')
  //     console.log('Done!')
  //   }
  // }, [toggle]);