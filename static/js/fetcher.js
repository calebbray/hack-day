async function getThatThing() {
  const response = await fetch("https://stablediffusionapi.com/api/v3/text2img", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: "hPirRJ8gJ6KrtHfp0hhGC1B5D55f2BVb8BDQK6kgJ5qUA6eSL6o0J0wqwWaf",
      prompt:
        "ultra realistic ((chief executive)), comedic, goofy, funny, hyper detail, cinematic lighting, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
      negative_prompt:
        "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((extra legs)), anime",
      width: "1080",
      height: "720",
      samples: "1",
      num_inference_steps: "30",
      seed: null,
      guidance_scale: 7.5,
      webhook: null,
      track_id: null,
    }),
  });

  const data = await response.json();
  // console.log(`🧐 ~ res 1:`, data)

  setTimeout(() => {
    console.log("waited 5 seconds");
  }, 5000);

  const resultResponse = await fetch("https://stablediffusionapi.com/api/v3/text2img", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: "hPirRJ8gJ6KrtHfp0hhGC1B5D55f2BVb8BDQK6kgJ5qUA6eSL6o0J0wqwWaf",
      prompt:
        "ultra realistic ((chief executive)), comedic, goofy, funny, hyper detail, cinematic lighting, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
      negative_prompt:
        "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((extra legs)), anime",
      width: "1080",
      height: "720",
      samples: "1",
      num_inference_steps: "30",
      seed: null,
      guidance_scale: 7.5,
      webhook: null,
      track_id: null,
    }),
  });
  console.log(resultResponse)
  return resultResponse.json();
}

function logSomething() {
  getThatThing().then((data) => {
    console.log("data");
    return data;
  });
}
