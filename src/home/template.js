const yo = require('yo-yo')
const layout = require('../layout')
const picture = require('../picture-card')
const translate = require('../translate').message

const toggleButtons = () =>{
    document.getElementById('fileName').classList.toggle('hide')
    document.getElementById('btnUpload').classList.toggle('hide')
    document.getElementById('btnCancel').classList.toggle('hide')
}

const onchange = e =>{
    toggleButtons()
}

const cancel = e =>{
    toggleButtons()
    document.getElementById('formUpload').reset()
}

module.exports = pictures => {
    let el = yo`
    <div class="container timeline"> 
        <div class="row">
            <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
                <form id="formUpload" enctype="multipart/form-data" class="form-upload">
                    <div id="fileName" class="fileUpload btn btn-flat cyan ">
                        <span><i class="fa fa-camera"></i> ${translate('upload-picture')}</span>
                        <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
                    </div>
                    <button id="btnUpload" type="submit" class="btn btn-flat cyan hide" >${translate('upload')}</button>
                    <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel} ><i class="fa fa-times"></button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m10 offset-m1 l6 offset-l3">
                ${
                    pictures.map(pic => {
                        return picture(pic)
                    })
                }
            </div>
        </div>
    </div>
    `
    return layout(el)
} 
