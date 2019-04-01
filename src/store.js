import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    capture: {
      modalState: false,
      fileOnStore: null,
      url: null,
      imageH: null,
      imageW: null,
      imageOrientation: null,
      imageCanvas: null,
      imageCtx: null,
      encodedImage: null,
      GCPOriginalResponse: null,
      GCPOriginalResponseFullText: null,
    },
    gpcKey: "1111",
    
  },
  getters: {
    getImageUrl: state => {
      return state.capture.url
    },
    getEncodedCapturedImage: state => {
      return state.capture.encodedImage
    },
    getCapturedImageCanvas: state => {
      return state.capture.imageCanvas
    },
    getCapturedImageCtx: state => {
      return state.capture.imageCtx
    },
    getCapturedModalState: state => {
      return state.capture.modalState
    },
    getGCPOriginalResponseFullText: state => {
      return state.capture.GCPOriginalResponseFullText
    },
    getImageUrl: state => {
      return state.capture.url
    },
  },
  mutations: {
    showCaptureModal: state => {
      state.capture.modalState = true;
    },
    hideCaptureModal: state => {
      state.capture.modalState = false;
    },
    setCapturedFileOnStore: (state, file) => {
      state.capture.fileOnStore = file
    },
    setCapturedImageH: (state, h) => {
      state.capture.imageH = h
    },
    setCapturedImageW: (state, w) => {
      state.capture.imageW = w
    },
    setCapturedImageOrientation: (state, orientation) => {
      state.capture.imageOrientation = orientation
    },
    setCapturedImageCanvas: (state, c) => {
      state.capture.imageCanvas = c
    },
    setCapturedImageCtx: (state, ctx) => {
      state.capture.imageCtx = ctx
    },
    setCapturedImageUlr: (state, url_) => {
      state.capture.url = url_
    },
    setCapturedEncodedImage: (state, encodedImage_) => {
      state.capture.encodedImage = encodedImage_
    },
    handleOCRResponse: (state, payload) => {
      //This method should do the things that happen inside the .then() of the promise after the call to the GCP call
      state.capture.GCPOriginalResponse = payload
      state.capture.GCPOriginalResponseFullText = payload.data.responses[0].fullTextAnnotation.text
    }
  },
  actions: {
    requestOCRfromGC: (context, payload) => {
      //Create the data element to send to the GC
      let jsonData = {
        "requests":[
          {
            "image":{
              "content": payload.data,
            },
            "features":[
              {
                "type":"DOCUMENT_TEXT_DETECTION",
              }
            ]
          }
        ]
      }
      // console.log('jsonData:', jsonData)
      //TODO: Include the key after the '=' in the following line for the API to work properly
      axios.post('https://vision.googleapis.com/v1/images:annotate?key=',jsonData)
        .then(res => {
          console.log('response in axios .then():', res)
          context.commit('handleOCRResponse', res)
          context.commit('hideCaptureModal')
          payload.router.push('/new-quote')
          // console.log('payload.router:', payload.router)
        })
        .catch(err => console.log(err))

    }
  }
})