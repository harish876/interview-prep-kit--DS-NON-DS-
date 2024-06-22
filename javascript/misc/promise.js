import fetch from "node-fetch"

function promiseFactory(ms, message) {
  return async () => {
    console.log(`Waiting for ${ms / 1000}s`);
    await new Promise((resolve) => setTimeout(resolve, ms));
    return message
  };
}
async function start() {

    const job1 = "Hey,I am doing Job 1"
    console.log(job1)

    const job2 = promiseFactory(1000,"Hey, I am doing Job 2")

    const job3 = "Hey,I am doing Job 3"
    console.log(job3)

    const job2Result = await job2()
    console.log(job2Result)

}

start();
