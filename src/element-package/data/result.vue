<template>
    <web-row>
      <web-col :sm="12" :lg="6">
        <web-result
          icon="success"
          title="Success Tip"
          sub-title="Please follow the instructions"
        >
          <template #extra>
            <web-button type="primary">Back</web-button>
          </template>
        </web-result>
      </web-col>
      <web-col :sm="12" :lg="6">
        <web-result
          icon="warning"
          title="Warning Tip"
          sub-title="Please follow the instructions"
        >
          <template #extra>
            <web-button type="primary">Back</web-button>
          </template>
        </web-result>
      </web-col>
      <web-col :sm="12" :lg="6">
        <web-result
          icon="error"
          title="Error Tip"
          sub-title="Please follow the instructions"
        >
          <template #extra>
            <web-button type="primary">Back</web-button>
          </template>
        </web-result>
      </web-col>
      <web-col :sm="12" :lg="6">
        <web-result icon="info" title="Info Tip">
          <template #sub-title>
            <p>Using slot as subtitle</p>
          </template>
          <template #extra>
            <web-button type="primary">Back</web-button>
          </template>
        </web-result>
      </web-col>
    </web-row>
  </template>