function requestAIImage(params) {
  return fetch("https://stablediffusionapi.com/api/v3/text2img", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: "hPirRJ8gJ6KrtHfp0hhGC1B5D55f2BVb8BDQK6kgJ5qUA6eSL6o0J0wqwWaf",
      prompt:
        "ultra realistic ((doctors)), action, white, caucasian, 1995, comedic, work, christian, holy, professional, jesus, family, pixar, hyper detail, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K, cell-shaded",
      negative_prompt:
        "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((extra legs)), ((ugly)), anime",
      width: "1080",
      height: "720",
      samples: "1",
      num_inference_steps: "5",
      seed: 2,
      guidance_scale: 5.5,
      webhook: null,
      track_id: null,
    }),
  }).then(function (data) {
    return data.json();
  });
}

async function getThatThing(params) {
  const response = await requestAIImage(params);
  if (response.status === "success") {
    return response.output[0];
  }

  return requestAIImage(params);
}

async function loadImage(params) {
  return getThatThing(params);
}
