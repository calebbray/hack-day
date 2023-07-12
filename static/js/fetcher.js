function requestAIImage(params) {
  const searchTerm = getSearchPrompt(params);

  //hPirRJ8gJ6KrtHfp0hhGC1B5D55f2BVb8BDQK6kgJ5qUA6eSL6o0J0wqwWaf
  return fetch("https://stablediffusionapi.com/api/v3/text2img", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: "hPirRJ8gJ6KrtHfp0hhGC1B5D55f2BVb8BDQK6kgJ5qUA6eSL6o0J0wqwWaf",
      prompt: `((${searchTerm})) hyper detail, Canon EOS R3, nikon, f/1.4, ISO 200`,
      width: "1080",
      height: "360",
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

function getSearchPrompt(params) {
  const { q } = params;
  const [code, ...rest] = q.split(" ");
  return rest.join(" ");
}

async function getThatThing(params) {
  const response = await requestAIImage(params);
  if (response.status === "success" && response.output.length) {
    console.log(response.output[0]);
    return response.output[0];
  }

  return requestAIImage(params);
}

async function loadImage(params) {
  let p = document.getElementById("occ-text");
  p.innerText = getSearchPrompt(params);
  return getThatThing(params);
}
