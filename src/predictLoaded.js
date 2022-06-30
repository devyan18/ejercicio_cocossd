import swal from "sweetalert"
import toggleViewForm from "./toggleViewForm"

function predictLoad (img) {
  mobilenet.load().then(model => {
    model.classify(img).then(predictions => {
      console.log(predictions)
      toggleViewForm()
      swal(`${predictions[0].className}`)
    })
  })
}

export default predictLoad