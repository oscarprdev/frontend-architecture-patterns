<script setup lang="ts">
import { Button, Input, Label, Badge } from '@frontend-app/ui'
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Flights Feature</h1>
    <p class="text-gray-600 mb-6">
      This is the Flights microfrontend feature, loaded lazily when you click the Flights menu item.
    </p>
    <div class="space-y-4 max-w-sm">
      <div>
        <Label class="block mb-2">Search flights</Label>
        <Input placeholder="Destination..." class="mb-2" />
        <div class="flex gap-2">
          <Button>Search</Button>
          <Button variant="outline">Clear</Button>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <Badge>Popular</Badge>
        <Badge variant="secondary">New</Badge>
      </div>
    </div>
  </div>
</template>
