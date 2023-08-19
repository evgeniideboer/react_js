const KylePromise = () => {
  function makeRequest(location) {
    return new Promise((resolve, reject) => {
      console.log(`making request to ${location}`);
      if (location === "Google") {
        resolve("Google says hi");
      } else {
        reject("we can only talk to Google");
      }
    });
  }

  function processRequest(response) {
    return new Promise((resolve, reject) => {
      console.log("processing response");
      resolve(`extra information + ${response}`);
    });
  }

  // makeRequest("Google")
  //   .then((response) => {
  //     console.log("response received");
  //     return processRequest(response);
  //   })
  //   .then((processRequest) => {
  //     console.log(processRequest);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  async function doWork() {
    try {
      const response = await makeRequest("Google");
      console.log("response received");
      const processedResponse = await processRequest(response);
      console.log(processedResponse);
    } catch (err) {
      console.log(err);
    }
  }
  doWork();

  //   return <div>{makeRequest}</div>;
};
export default KylePromise;
