import type { ComputedRef, Ref } from 'vue'
import type { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import { NotificationApiInjection } from 'naive-ui/lib/notification/src/NotificationProvider'

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

declare type RefType<T> = T | null

declare type LabelValueOptions = {
  label: string
  value: any
  disabled: boolean
  [key: string]: string | number | boolean
}[]

declare type EmitType = (event: string, ...args: any[]) => void

declare type TargetContext = '_self' | '_blank'

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null
declare type Nullable<T> = T | null
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>
}
declare global {
  interface Window {
    $message: MessageApiInjection
    $dialog: DialogApiInjection
    $notification: NotificationApiInjection
    $html2Canvas: any
    $JsPDF: any
    getVueApp: any
  }
}
import type { VNodeChild, PropType as VuePropType } from 'vue'

// vue
declare type PropType<T> = VuePropType<T>
declare type VueNode = VNodeChild | JSX.Element

export type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}

declare type Nullable<T> = T | null
declare type NonNullable<T> = T extends null | undefined ? never : T
declare type Recordable<T = any> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}
declare type Indexable<T = any> = {
  [key: string]: T
}
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type IntervalHandle = ReturnType<typeof setInterval>

declare interface ChangeEvent extends Event {
  target: HTMLInputElement
}

declare interface WheelEvent {
  path?: EventTarget[]
}

declare function parseInt(s: string | number, radix?: number): number

declare function parseFloat(string: string | number): number

declare interface AnyObject {
  [key: string]: any;
}