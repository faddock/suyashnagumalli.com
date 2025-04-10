---
title: Usage Notes
author: Suyash Nagumalli
pubDatetime: 2025-04-10T02:53:36Z
slug: usage-notes
featured: false
draft: true
---

#### How to get pubDatetime for post frontmatter

This is known as the **ISO 8601** format, commonly used in JavaScript and supported in many markdown-based static site generators like Astro.  
#### 🔧 Command (for Unix/Linux/macOS):
```bash
date -u +"%Y-%m-%dT%H:%M:%SZ"
```
- -u ensures the time is in UTC (Coordinated Universal Time)
- "+" tells date how to format the output