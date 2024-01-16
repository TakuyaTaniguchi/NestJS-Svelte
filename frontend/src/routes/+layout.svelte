<div>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/settings">Settings</a>
    </nav>
    <main>
        <slot></slot>
    </main>

    <footer class="footer">
        <div>
            Footer
        </div>
    </footer>
</div>

<style>
.footer{
    width: 100%;
    background-color: bisque;
}
</style>
