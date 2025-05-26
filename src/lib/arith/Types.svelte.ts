import type { Snippet } from 'svelte';
import type { ClassProp } from 'tailwind-variants';

export type ImageDesc = Record<'source' | 'alternate', string>;
export type ImageProp = ImageDesc & ClassProp;
export type Content = { content: string };
export type ContentProp_ = Partial<Content> & ClassProp;
export type Paragraph = { title: string; contents: string[] } & ImageDesc;
export type IndexedParagraph = { i: number; paragraph: Paragraph };
export type BasicProp = { children: Snippet };
export type ContainerProp = BasicProp & ClassProp;
export type ContainerProp_ = Partial<BasicProp> & ClassProp;
export type ContentContainer_ = Partial<Content> & ContainerProp_;
export type Right = { right: boolean };
export type CardProp_ = Right & ImageDesc & ContainerProp_;
