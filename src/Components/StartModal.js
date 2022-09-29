function StartModal(props) {
  return(
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pokemon Hunt!</h5>
      </div>
      <div class="modal-body">
        <p>Try and find all 3 pokemon as fast as possible!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Let's Go!</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default StartModal;
