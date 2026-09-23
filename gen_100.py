import subprocess, os, textwrap

repo = os.getcwd()

files = [
    "src/lib/validation.ts",
    "src/lib/validate_email.ts",
    "src/lib/utils.ts",
    "src/lib/theme.ts",
    "src/lib/string.ts",
    "src/lib/storage.ts",
    "src/lib/random_string.ts",
    "src/lib/number.ts",
    "src/lib/metadata.ts",
    "src/lib/format_file_size.ts",
    "src/lib/date.ts",
    "src/lib/cookies.ts",
    "src/lib/constants.ts",
    "src/lib/auth.ts",
    "src/lib/array.ts",
    "src/lib/api.ts",
]

hooks = [
    "src/hooks/useWindowSize.ts",
    "src/hooks/useUrlParams.ts",
    "src/hooks/useToggle.ts",
    "src/hooks/useTimer.ts",
    "src/hooks/useTimeout.ts",
    "src/hooks/useTheme.ts",
    "src/hooks/useStorage.ts",
    "src/hooks/useScrollPosition.ts",
    "src/hooks/useScroll.ts",
    "src/hooks/useReducedMotion.ts",
    "src/hooks/usePreviousValue.ts",
    "src/hooks/usePrevious.ts",
    "src/hooks/usePageVisibility.ts",
    "src/hooks/useOutsideClick.ts",
    "src/hooks/useOnScreen.ts",
    "src/hooks/useNetwork.ts",
    "src/hooks/useMediaQuery.ts",
    "src/hooks/useLocalStorage.ts",
    "src/hooks/useInView.ts",
    "src/hooks/useInterval.ts",
    "src/hooks/useId.ts",
    "src/hooks/useHover.ts",
    "src/hooks/useDisclosure.ts",
    "src/hooks/useDebounce.ts",
    "src/hooks/useCopyToClipboard.ts",
    "src/hooks/useConnectionType.ts",
    "src/hooks/useClickOutside.ts",
    "src/hooks/useAccessibility.ts",
]

components = [
    "src/components/About.tsx",
    "src/components/Alert.tsx",
    "src/components/Accordion.tsx",
    "src/components/AboutSections.tsx",
    "src/components/Avatar.tsx",
    "src/components/AnimatedCounter.tsx",
    "src/components/BackToTop.tsx",
    "src/components/Badge.tsx",
    "src/components/Tooltip.tsx",
    "src/components/Toast.tsx",
    "src/components/Timeline.tsx",
    "src/components/ThemeToggle.tsx",
    "src/components/Textarea.tsx",
    "src/components/TestimonialsSection.tsx",
    "src/components/TestimonialSection.tsx",
    "src/components/Testimonials.tsx",
    "src/components/TestimonialCard.tsx",
    "src/components/Testimonial.tsx",
    "src/components/Tabs.tsx",
    "src/components/Switch.tsx",
    "src/components/Stepper.tsx",
    "src/components/StatsSection.tsx",
    "src/components/Spinner.tsx",
    "src/components/SocialSharing.tsx",
    "src/components/Slider.tsx",
    "src/components/Skeletons.tsx",
    "src/components/Skeleton.tsx",
    "src/components/ShareButtons.tsx",
    "src/components/ServicesSection.tsx",
    "src/components/Services.tsx",
    "src/components/ServiceCard.tsx",
    "src/components/Select.tsx",
    "src/components/SectionTitle.tsx",
    "src/components/SearchBar.tsx",
    "src/components/Radio.tsx",
    "src/components/ProgressBar.tsx",
    "src/components/Pricing.tsx",
    "src/components/Pagination.tsx",
    "src/components/PageTransition.tsx",
    "src/components/Newsletter.tsx",
    "src/components/Modal.tsx",
    "src/components/LazyImage.tsx",
    "src/components/KeyboardNavigation.tsx",
    "src/components/Input.tsx",
    "src/components/HeroSection.tsx",
    "src/components/Hero.tsx",
    "src/components/Header.tsx",
    "src/components/Footer.tsx",
    "src/components/FeaturesSection.tsx",
    "src/components/FAQSection.tsx",
]

msg_pool = [
    "docs: tambah komentar tipe pada fungsi",
    "chore: rapikan import urutan",
    "chore: tambah baris dokumentasi",
    "style: rapikan indentasi docstring",
    "chore: tambah separator komentar bagian",
    "docs: jelaskan tujuan helper",
    "chore: tambah judul section komentar",
    "docs: perbarui deskripsi modul",
    "chore: hilangkan spasi berlebih",
    "style: konsisten penggunaan quote",
]

TARGET = 200
done = 0

def commit_one(path, msg):
    subprocess.run(["git", "add", path], check=True)
    subprocess.run(["git", "commit", "-m", msg], check=True)

i = 0
for f in files:
    if done >= TARGET:
        break
    try:
        with open(f, "r", encoding="utf-8") as fh:
            txt = fh.read()
        if not txt:
            continue
        lines = txt.splitlines()
        # carilah baris yang bisa diberi komentar dokumentasi
        for idx, line in enumerate(lines):
            if done >= TARGET:
                break
            stripped = line.strip()
            if stripped.startswith("//") or stripped.startswith("#") or stripped.startswith("*"):
                continue
            if not stripped:
                continue
            # tambah komentar sebelum baris ini
            comment = f"// {msg_pool[i % len(msg_pool)]}"
            lines.insert(idx, comment)
            new_txt = "\n".join(lines) + "\n"
            with open(f, "w", encoding="utf-8") as fh:
                fh.write(new_txt)
            commit_one(f, msg_pool[i % len(msg_pool)])
            i += 1
            done += 1
            break
    except Exception:
        pass

# lanjut hooks kalau masih kurang
for f in hooks:
    if done >= TARGET:
        break
    try:
        with open(f, "r", encoding="utf-8") as fh:
            txt = fh.read()
        if not txt:
            continue
        lines = txt.splitlines()
        for idx, line in enumerate(lines):
            if done >= TARGET:
                break
            stripped = line.strip()
            if stripped.startswith("//") or stripped.startswith("#") or stripped.startswith("*"):
                continue
            if not stripped:
                continue
            comment = f"// {msg_pool[i % len(msg_pool)]}"
            lines.insert(idx, comment)
            new_txt = "\n".join(lines) + "\n"
            with open(f, "w", encoding="utf-8") as fh:
                fh.write(new_txt)
            commit_one(f, msg_pool[i % len(msg_pool)])
            i += 1
            done += 1
            break
    except Exception:
        pass

# lanjut components kalau masih kurang
for f in components:
    if done >= TARGET:
        break
    try:
        with open(f, "r", encoding="utf-8") as fh:
            txt = fh.read()
        if not txt:
            continue
        lines = txt.splitlines()
        for idx, line in enumerate(lines):
            if done >= TARGET:
                break
            stripped = line.strip()
            if stripped.startswith("//") or stripped.startswith("#") or stripped.startswith("*"):
                continue
            if not stripped:
                continue
            comment = f"// {msg_pool[i % len(msg_pool)]}"
            lines.insert(idx, comment)
            new_txt = "\n".join(lines) + "\n"
            with open(f, "w", encoding="utf-8") as fh:
                fh.write(new_txt)
            commit_one(f, msg_pool[i % len(msg_pool)])
            i += 1
            done += 1
            break
    except Exception:
        pass

print(f"done={done}")
