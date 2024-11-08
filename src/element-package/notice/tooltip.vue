<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <web-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
        <web-button>top-start</web-button>
      </web-tooltip>
      <web-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <web-button>top</web-button>
      </web-tooltip>
      <web-tooltip class="box-item" effect="dark" content="Top Right prompts info" placement="top-end">
        <web-button>top-end</web-button>
      </web-tooltip>
    </div>
    <div class="row">
      <web-tooltip class="box-item" effect="dark" content="Left Top prompts info" placement="left-start">
        <web-button>left-start</web-button>
      </web-tooltip>
      <web-tooltip class="box-item" effect="dark" content="Right Top prompts info" placement="right-start">
        <web-button>right-start</web-button>
      </web-tooltip>
    </div>
    <div class="row">
      <web-tooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
        <web-button class="mt-3 mb-3">left</web-button>
      </web-tooltip>
      <web-tooltip class="box-item" effect="dark" content="Right Center prompts info" placement="right">
        <web-button>right</web-button>
      </web-tooltip>
    </div>
    <div class="row">
      <web-tooltip class="box-item" effect="dark" content="Left Bottom prompts info" placement="left-end">
        <web-button>left-end</web-button>
      </web-tooltip>
      <web-tooltip class="box-item" effect="dark" content="Right Bottom prompts info" placement="right-end">
        <web-button>right-end</web-button>
      </web-tooltip>
    </div>
    <div class="row center">
      <web-tooltip class="box-item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
        <web-button>bottom-start</web-button>
      </web-tooltip>
      <web-tooltip class="box-item" effect="dark" content="Bottom Center prompts info" placement="bottom">
        <web-button>bottom</web-button>
      </web-tooltip>
      <div class="box">
        <web-tooltip class="box-item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
          ssssssssssssssssss bottom-end
        </web-tooltip>
      </div>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}

.box {
  width: 160px;
}
</style>