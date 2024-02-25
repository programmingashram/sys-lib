<a href="https://programmingashram.github.io/sys-lib/?path=/docs/example-introduction--docs">
  <img width="60px" height="60px" src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci85ZTczNzEwN2YxMmNjOTgwNWQ4ZmYzNTIwMjNhMTQ0Nz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.ny7boq-PD5nvRT68fo3aEoNlsUIhOUWtm8__9YQhghk" align="right" />
</a>

# Sys Design 2023

SysDesign2023 is a front-end library that provides a set of reusable components and utility functions for building modern web applications. It is built on top of popular front-end frameworks  Angular.

- ⚡ Built for speed
- ⬇️ No need to import modules for components
- ⚖️ Light-weight while implementing all sys features from the supported scss/css custimization
- 🌐 Works in a browser, on a server, or from a command line interface (CLI)



## Demo

Checkout the [demo page](https://programmingashram.github.io/sysDesign-Sample/) to see sysDesign in action ⛹️

## Docs

Our [documentation pages](https://programmingashram.github.io/sys-lib/) are also rendered using SysDesign2023 💯

### Component Status [ ✅ - Complete, 🚧 - Working ]

| Material      | Dev Status | Documatation Status |
| ----------- | ----------- | ----------- |
| Header      | ✅          | 🚧 |
| Sidebar      | ✅          | 🚧 |
| Buttons      | ✅          | 🚧 |
| Tabs      | ✅          | 🚧 |
| cards      | ✅          | 🚧 |
| Tree      | ✅          | 🚧 |
| Slide Toggle      | ✅          | 🚧 |
| Dialog      | ✅          | 🚧 |
| Alerts      | ✅          | 🚧 |
| Inputs      | ✅          | 🚧 |
| Radios      | ✅          | 🚧 |
| Expension Panel      | ✅          | 🚧 |
| Table      | ✅          | 🚧 |

________________________


### Design Assets Status [ ✅ - Complete, 🚧 - Working ]

| Material      | Design Status | Documatation Status |
| ----------- | ----------- | ----------- |
| Design Theme (Figma)      | 🚧          | 🚧 |
| Icons     | 🚧          | 🚧 |



## Compatibility

**Node.js:** Only [current and LTS](https://nodejs.org/en/about/releases/) Node.js versions are supported. End of life Node.js versions may become incompatible with Marked at any point in time.

**Browser:** All Browser supported :)

## Installation

**Add in your project:** 

```sh 
npm i sysdesign2023
```

**After Install sysdesign2023 you also need to install material for icons:** 

```sh
ng add @angular/maetrial
```

**Now import sysDesignModule from sysdesign2023 in your app.module.ts** 

```sh
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { sysDesignModule } from 'sysdesign2023';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  >>>  sysDesignModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```



## Get Started

Now You can start the building your application in angular with sysdesign2023 go to the documentation part from here [documentation pages](https://programmingashram.github.io/sys-lib/) are also rendered using SysDesign2023 💯
