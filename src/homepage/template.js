var yo = require('yo-yo');
var layout = require('../layout');
var picture =  require('../picture-card');
var translate = require('../translate').message;

module.exports = function (pictures){
    var el = yo`<div class="container timeline">
                    <div class="row">
                        <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
                            <form enctype="multipart/form-data" class="form-upload" id="formUpload">
                                <div id="fileName" class="fileUpload btn btn-flat cyan">
                                    <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate('upload-picture')}</span>
                                    <input name="picture" id="file" type="file" class="upload" onchange=${onchange}/>    
                                </div>
                                <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>    
                                <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>    
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m10 offset-m1 l6 offset-l3">
                            ${pictures.map(function(pic){
                                return picture(pic);
                            })}
                        </div>
                    </div>
                </div>`;

    function toggleButtons(){
        document.getElementById('fileName').classList.toggle('hide');
        document.getElementById('btnUpload').classList.toggle('hide');
        document.getElementById('btnCancel').classList.toggle('hide');
    }                        

    function cancel(){
        toggleButtons();
        document.getElementById('formUpload').reset();
    }            
    
    function onchange(){
        toggleButtons();
    }
  
    return layout(el);
}
